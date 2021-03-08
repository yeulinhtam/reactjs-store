import * as yup from 'yup';

export const registerValidationSchema = yup.object({
    email: yup.string('Enter you email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup.string('Password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    confirmPassword: yup.string('Confirm Password')
        .min(8, 'Confirm password be of minium 8 characters length')
        .required('Confirm password is required')
        .oneOf([yup.ref("password")], "Password's not match"),
    fullname: yup.string('Full name')
        .matches(/[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*$/, 'Please enter valid name')
        .max(50)
        .required('Full name is required')
})