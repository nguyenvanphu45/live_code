import React, { useState } from 'react';
import styles from '../Auth.module.scss';
import className from 'classnames/bind';
import imageSvg from '~/assets/svg';
import { FaFacebookSquare, FaUser } from 'react-icons/fa';
import { BsGithub, BsTwitter, BsGoogle } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { BiSolidLock } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { showErrMsg, showSuccessMsg } from '../../../components/Notification';

const cx = className.bind(styles);

const initialState = {
    email: '',
    name: '',
    password: '',
};

function RegisterPage() {
    const [user, setUser] = useState(initialState);
    const navigate = useNavigate();

    const { email, name, password, err, success } = user;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, err: '', success: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name) {
            return setUser({ ...user, err: 'Please fill in all fields!', success: '' });
        }
        try {
            const res = await axios.post(
                '/auth/register',
                {
                    email,
                    name,
                    password,
                },
                { withCredentials: true },
            );

            setUser({ ...user, err: '', success: res.data.message });
            navigate('/login');
        } catch (err) {
            console.log(err.response.data.msg);
            err.response.data.message && setUser({ ...user, err: err.response.data.message, success: '' });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <form className={cx('form', 'form-regis')} onSubmit={handleSubmit}>
                <img src={imageSvg.logo} alt="" />
                <div className={cx('title', 'title-regis')}>
                </div>
                <div className={cx('input')}>
                    <MdMail className={cx('input-icon')} />
                    <input type="email" value={email} name="email" onChange={handleChangeInput} placeholder="Email" />
                </div>
                <div className={cx('input')}>
                    <FaUser className={cx('input-icon')} />
                    <input type="text" value={name} name="name" onChange={handleChangeInput} placeholder="Full Name" />
                </div>
                <div className={cx('input')}>
                    <BiSolidLock className={cx('input-icon')} />
                    <input
                        type="password"
                        value={password}
                        name="password"
                        onChange={handleChangeInput}
                        placeholder="Password"
                    />
                </div>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <button className={cx('btn')}>Start coding now</button>
                <div className={cx('social', 'social-regis')}>
                </div>
                <p className={cx('account')}>
                    Adready a member? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default RegisterPage;
