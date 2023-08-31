import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { createAxios } from '../../utils/api';
import styles from './AdminChallenge.module.scss';
import classNames from 'classnames/bind';
import { Editor } from '@monaco-editor/react';

const cx = classNames.bind(styles);

function AdminChallenge() {
    const [challenges, setChallenges] = useState([]);
    const location = useLocation();
    const code = location.state.code;

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

        fetchApi();
    }, []);

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
                                <div>
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
            <div className={cx('wrapper__code')}>
                <Editor height="70vh" defaultValue={code} />
            </div>
        </div>
    );
}

export default AdminChallenge;
