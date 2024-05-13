export const validData=(email,password)=>{
    const isemail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const ispassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isemail) return "Email ID not valid";
    if(!ispassword) return "Password not valid";

    return null;
};