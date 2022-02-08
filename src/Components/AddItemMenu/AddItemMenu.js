import React, { useState } from 'react';
import { Uuid } from '../../Const/Methods';
import './AddItemMenu.scss';

export default function AddItemMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    // const dispatch = useDispatch();

    const handleOnSubmit = () => {
        // dispatch(addBirthday({
        //     id: Uuid(),
        //     name: fullName,
        //     dob: dob,
        //     img: imgUrl
        // }))
        // setFullName("");
        // setDob("");
        // setImgUrl("");
        // setIsOpen(false);

        // dispatch(setSelectedBirthday(0));
    }

    const handleValidation = () => {
        return !fullName.length || !dob.length || !imgUrl.length;
    }

    return (
        <div className={isOpen ? "AddItemMenu Open" : "AddItemMenu Closed"}>
            <button onClick={() => { setIsOpen(!isOpen) }} className={isOpen ? "AddItemMenu--ToggleBtn Open" : "AddItemMenu--ToggleBtn Closed"}>
                <p>ADD NEW +</p>
            </button>
            <div className="AddItemMenu--FormContainer">
                <div className="AddItemMenu--FieldContainer">
                    <label>Full Name</label>
                    <input value={fullName} maxLength={30} onChange={(e) => { setFullName(e.target.value) }} type="text" placeholder='Enter full name' />
                    <span className="AddItemMenu--LetterCounter">{fullName.length}/30</span>
                </div>
                <div className="AddItemMenu--FieldContainer">
                    <label>Date of Birth</label>
                    <input value={dob} onChange={(e) => { setDob(e.target.value) }} type="date" />
                </div>
                <div className="AddItemMenu--FieldContainer">
                    <label>Image URL</label>
                    <input value={imgUrl} onChange={(e) => { setImgUrl(e.target.value) }} type="text" placeholder='Enter image url' />
                </div>
                <button disabled={handleValidation()} onClick={handleOnSubmit} className="AddItemMenu--SubmitBtn" >
                    <p>SUBMIT</p>
                </button>
            </div>
        </div>
    );
}
