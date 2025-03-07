"use server";

export async function login(prevState: any, formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;


    if (email !== 'exthitikorn@gmail.com' && password !== '1234') {
        return { message: "Email or password is incorrect" };        
    }
    console.log(email, password);

}
