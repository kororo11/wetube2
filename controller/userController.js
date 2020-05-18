import routes from '../routes';

export const getJoin = (req, res) => {
    res.render('join', { pageTitle: 'Join' });
};

export const postJoin = (req, res) => {
    // console.log(req.body); // req.body => name, email, password, password2
    const {
        body: { name, email, password, password2 },
    } = req;
    if (password != password2) {
        console.log('비밀번호가 서로 일치하지 않습니다.');
        res.status(400);
        res.render('join', { pageTitle: 'Join' });
    } else {
        res.redirect(routes.home);
    }
};
export const login = (req, res) => res.render('login', { pageTitle: 'Login' });
export const logout = (req, res) => res.render('logout', { pageTitle: 'Logout' });
export const users = (req, res) => res.render('users', { pageTitle: 'Users' });
export const editProfile = (req, res) => res.render('editProfile', { pageTitle: 'Edit Profile' });
export const changePassword = (req, res) => res.render('changePassword', { pageTitle: 'Change Password' });
export const userDetail = (req, res) => res.render('userDetail', { pageTitle: 'User Detail' });
