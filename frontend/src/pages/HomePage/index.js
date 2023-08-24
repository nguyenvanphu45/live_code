import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import imageSvg from '~/assets/svg';
import { createAxios } from '../../utils/api';

const cx = classNames.bind(styles);

function HomePage() {
    const [challenges, setChallenges] = useState([]);
    let axiosJWT = createAxios();

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axiosJWT.get('/challenge');
                setChallenges(res.data.challenge);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    return (
        <>
            <h1 className={cx('title')}>Welcome To NAPA Global</h1>
            <div className={cx('cards')}>
                {challenges.map((data, index) => {
                    return (
                        <div className={cx('cards__item')}>
                            <div className={cx('cards__item--header')}>
                                <img src={imageSvg.start} alt="" />
                                <p>Challenge {index + 1}</p>
                            </div>
                            <div className={cx('cards__item--body')}>
                                {/* <h2>{data.title}</h2> */}
                                <p>{data.topic[0]}</p>
                                <div className={cx('body__info')}>
                                    <div className={cx('duration')}>
                                        <img src={imageSvg.clock} alt="" />
                                        <span>10 min</span>
                                    </div>
                                    <button className={cx('btn')}>
                                        <Link
                                            className={cx('btn__detail')}
                                            state={{ data }}
                                            to={`/challenge/${data._id}`}
                                        >
                                            Details
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default HomePage;
