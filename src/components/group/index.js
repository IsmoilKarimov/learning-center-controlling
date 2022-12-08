import React, { useState } from "react";
import { Button, Modal } from "antd";
import { NavLink } from "react-router-dom";
import "./group.scss";

const Group = () => {

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
        <h1>Guruhlar ro'yhati</h1>
        <NavLink to="/group" className="teacher" activeclassname="active" onClick={showModal}>
          Guruh qo'shish
        </NavLink>

        <Modal
          className="modal"
          //   title="O'qituvchi qo'shing"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <h1 className="add__teacher-title">Yangi guruh qo'shing</h1>
          <form className="add__form" action="#">
            <input
              className="add__form-input"
              type="text"
              placeholder="Guruh tartib raqami"
            />
            <input
              className="add__form-input"
              type="text"
              placeholder="Guruh o'qituvchisi"
            />
            <input
              className="add__form-input"
              type="text"
              placeholder="Guruh yo'nalishi"
            />
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Group;
