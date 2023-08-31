import React, { useEffect, useState } from 'react';
import { Select, Table } from 'antd';
import styles from './Admin.module.scss';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { createAxios } from '../../utils/api';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AdminPage() {
    const user = useSelector((state) => state.auth.user);
    let axiosJWT = createAxios();

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axiosJWT.get('/users');
                setAllUsers(res.data.user);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    const handleChange = async (value, id) => {
        await axiosJWT.put(`/users/update/status/${id}`, {
            status: value,
        });
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Challenge',
            dataIndex: 'challenge',
            key: 'challenge',
            render: (_, { code }) => {
                return (
                    <>
                        {code.map((clg, index) => {
                            return (
                                <Link
                                    key={clg}
                                    to={`/admin/challenge/${clg.challengeId}`}
                                    state={{ code: clg.content }}
                                    className={cx('challenge')}
                                >
                                    challenge {index + 1}
                                </Link>
                            );
                        })}
                    </>
                );
            },
        },
        {
            title: 'Status',
            key: 'status',
            render: (_, { _id, status }) => {
                const stt = ['Waiting', 'Pass', 'Failed'];
                return (
                    <div className={cx('table__select')}>
                        <Select defaultValue={status} key={_id} onChange={(value) => handleChange(value, _id)}>
                            {stt.map((s) => (
                                <Select.Option value={s}>{s}</Select.Option>
                            ))}
                        </Select>
                    </div>
                );
            },
        },
    ];

    return (
        <>
            {user.role !== 1 ? (
                <></>
            ) : (
                <>
                    <h1>List User</h1>
                    <div className={cx('table')}>
                        <Table
                            columns={columns}
                            dataSource={allUsers}
                        />
                    </div>
                </>
            )}
        </>
    );
}

export default AdminPage;
