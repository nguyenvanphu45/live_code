import React, { useEffect, useRef, useState } from 'react';
import styles from './Challenge.module.scss';
import classNames from 'classnames/bind';
import Editor from '@monaco-editor/react';
import { useParams } from 'react-router-dom';
import { createAxios } from '../../utils/api';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../components/Loading';

const cx = classNames.bind(styles);

function ChallengePage() {
    const [code, setCode] = useState('');
    const user = useSelector((state) => state.auth.user);
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(false);

    const id = useParams();

    let axiosJWT = createAxios();

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axiosJWT.get(`/challenge/${id.id}`);
                setChallenges([res.data.challenge]);
            } catch (error) {
                console.log(error);
            }
        };
        setLoading(false);

        fetchApi();
    }, []);

    const handleSave = async () => {
        if (!code) return;

        try {
            setLoading(true);
            const res = await axiosJWT.put(`/users/update/${user._id}`, {
                content: code,
                challengeId: id.id,
            });

            setLoading(false);

            toast.success('Save code success!', {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        } catch (err) {
            console.log(err);
            // err.response.data.message && setUserUpdate({ ...user });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper__content')}>
                <div className={cx('wrapper__content--topic')}>
                    {challenges.length &&
                        challenges[0].topic.map((clg, index) => (
                            <h4 key={index} dangerouslySetInnerHTML={{ __html: clg }}></h4>
                        ))}
                </div>
                <div className={cx('wrapper__content--example')}>
                    {challenges.length &&
                        challenges[0].example.map((exp, index) => {
                            return (
                                <div key={index}>
                                    <h4>Example {index + 1}:</h4>
                                    <pre>
                                        <p>
                                            <strong>Input: </strong>
                                            <span dangerouslySetInnerHTML={{ __html: exp.input }}></span>
                                        </p>
                                        <p>
                                            <strong>Output: </strong>
                                            {exp.output}
                                        </p>
                                        {exp.explanation && (
                                            <p>
                                                <strong>Explanation: </strong>
                                                <span dangerouslySetInnerHTML={{ __html: exp.explanation }}></span>
                                            </p>
                                        )}
                                    </pre>
                                </div>
                            );
                        })}
                </div>
            </div>
            {loading && <Loading />}
            <div className={cx('wrapper__code')}>
                <Editor
                    height="70vh"
                    defaultValue="// some comment"
                    value={code}
                    onChange={(newValue) => setCode(newValue)}
                />
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <div className={cx('wrapper__code--btn')}>
                    <button onClick={handleSave}>Save code</button>
                </div>
            </div>
        </div>
    );
}

export default ChallengePage;
