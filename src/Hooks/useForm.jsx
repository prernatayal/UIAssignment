import { useState } from "react";

const useForm = () => {

    const [formData, setFormData] = useState({
        phoneNumber: "",
        panNumber: "",
        address: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        let data = { ...formData };
        data[name] = value;
        setFormData(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData));
        setFormData({
            phoneNumber: "",
            panNumber: "",
            address: ""
        })
    }

    return { formData, handleOnChange, handleSubmit }

}
export default useForm;