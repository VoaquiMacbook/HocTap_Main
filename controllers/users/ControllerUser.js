// Trong ControllerUser.js
const ModelUser = require('./ModelUser');

const register = async (name, email, password) => {
    try {
        // Kiểm tra xem email đã được sử dụng chưa
        let user = await ModelUser.findOne({ email });
        if (user) {
            throw new Error('Email is already in use');
        } 
        // Tạo người dùng mới
        user = new ModelUser({ name, email, password });
        await user.save();
        return true;
    } catch (error) {
        console.log('Error', error);
        throw new Error('Error when registering user');
    }
    return false;
}

const login = async (email, password) => {
    try {
        // Kiểm tra xem email tồn tại không
        let user = await ModelUser.findOne({ email });
        if (!user) {
            throw new Error('Email does not exist');
        }
        // So sánh mật khẩu
        if (user.password !== password) {
            throw new Error('Password is incorrect');
        }
        // Trả về thông tin người dùng nếu đăng nhập thành công
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        };
    } catch (error) {
        console.log('Error: ', error);
        throw new Error('Error when logging in user');
    }
}

module.exports = { register, login };
