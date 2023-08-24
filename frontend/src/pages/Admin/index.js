import React, { useEffect, useState } from 'react';
import { Select, Table } from 'antd';
import styles from './Admin.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '../../utils/api';

const cx = classNames.bind(styles);

function AdminPage() {
    const user = useSelector((state) => state.auth.user);
    let axiosJWT = createAxios();

    const [allUsers, setAllUsers] = useState([]);
    const [allChallenge, setAllChallenge] = useState([]);
    console.log(allChallenge)

    // const filter = allChallenge.filter()

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

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axiosJWT.get('/code')
                setAllChallenge(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchApi();
    }, [])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Challenge',
            dataIndex: 'challenge',
            key: 'challenge',
            render: () => {
                return (
                    <>
                        {allChallenge.map((clg) => {
                            return (
                                <a key={clg}>
                                    {clg.sender.email}
                                    {/* {clg === challenge[challenge.length - 1] ? '' : ','}{' '} */}
                                </a>
                            );
                        })}
                    </>
                );
            },
        },
        {
            title: 'Status',
            key: 'status',
            render: () => {
                const status = ['Pass', 'Waiting', 'Failed'];
                return (
                    <div className={cx('table__select')}>
                        <Select defaultValue="Waiting">
                            {status.map((stt) => (
                                <Select.Option value={stt}>{stt}</Select.Option>
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
                        <Table columns={columns} dataSource={allUsers} />
                    </div>
                </>
            )}
        </>
    );
}

export default AdminPage;
