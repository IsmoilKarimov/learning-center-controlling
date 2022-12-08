import React, { useState } from "react";
import "./teacher.scss";
import { Button, Modal } from "antd";
// import 'antd/dist/antd.css';

import { NavLink } from "react-router-dom";
const Teacher = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>O'qituvchilar ro'yhati</h1>
        <NavLink to="/teacher" className="teacher" activeclassname="active" onClick={showModal} >
          O'qituvchi qo'shish
        </NavLink>

        <Modal className="modal"
        //   title="O'qituvchi qo'shing"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <h1 className="add__teacher-title">O'qituvchi qo'shing</h1>
          <form className="add__form" action="#">
            <input className="add__form-input" type="text" placeholder="O'qituvchining ism familiyasi"/>
            <input className="add__form-input" type="text" placeholder="O'qituvchining mutaxassisligi"/>
            <input className="add__form-input" type="text" placeholder="O'qituvchining ish vaqti"/>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Teacher;
