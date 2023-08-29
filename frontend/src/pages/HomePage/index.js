import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import imageSvg from '~/assets/svg';
import { createAxios } from '../../utils/api';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function HomePage() {
    const [randomElements, setRandomElements] = useState([null, null]);
    const user = useSelector((state) => state.auth.user);
    let axiosJWT = createAxios();
    const navigate = useNavigate();

    const getRandomObject = (array) => {
        const randomIndices = [];
        let i = 0;
        while (i < 2) {
            const randomIndex = Math.floor(Math.random() * array.length);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
                i++;
            }
        }

        const randomElements = randomIndices.map((index) => array[index]);
        setRandomElements(randomElements);
    };

    useEffect(() => {
        if (user.role === 1) {
            navigate('/admin');
        }

        const fetchApi = async () => {
            try {
                const res = await axiosJWT.get('/challenge');
                getRandomObject(res.data.challenge);
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
                {randomElements.map((data, index) => {
                    if (!data) {
                        return null;
                    }
                    return (
                        <div className={cx('cards__item')}>
                            <div className={cx('cards__item--header')}>
                                <img src={imageSvg.start} alt="" />
                                <p>Challenge {index + 1}</p>
                            </div>
                            <div className={cx('cards__item--body')}>
                                <h2>{data.title}</h2>
                                <p>{data.topic[0]}</p>
                                <div className={cx('body__info')}>
                                    <div className={cx('duration')}>
                                        <img src={imageSvg.clock} alt="" />
                                        <span>20 min</span>
                                    </div>
                                    <button className={cx('btn')}>
                                        <Link
                                            className={cx('btn__detail')}
                                            state={{ data }}
                                            to={`/challenge/${data._id}`}
                                            target="_blank"
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
