import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction, getTransation } from "../utils/axiosHelper.js";
import TransactionForm from "../components/TransactionForm";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { useUser } from "../context/userContext";
import useForm from "../hooks/useForm.js";
import { setTransactions } from "../features/transactions/transactionSlice.js";

const Transaction = () => {
  const { testFunction2, user } = useUser();

  const [show, setShow] = useState(false);

  const { form, setForm, handleOnChange } = useForm({
    type: "income",
    description: "",
    amount: 0,
    date: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [total, setTotal] = useState(0);

  // const [transactions, setTransactions] = useState([]);
  const dispatch = useDispatch();
  const { transactions } = useSelector((store) => store.transactionStore);

  const fetchTransaction = async () => {
    // console.log(testFunction2());
    // fetch the token from localstorage

    let data = await getTransation();

    console.log(data);
    dispatch(setTransactions(data.transactions));

    let tempTotal = data.transactions.reduce((acc, item) => {
      return item.type == "income"
        ? acc + parseFloat(item.amount)
        : acc - parseFloat(item.amount);
    }, 0);

    console.log(tempTotal);
    setTotal(tempTotal);
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  const handleOnDelete = async (id) => {
    alert(id);
    // delete axios
    let data = await deleteTransaction(id);
    if (data.status) {
      toast.success(data.message);
      fetchTransaction();
    } else {
      toast.error(data.message);
    }
  };

  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rounded-5">
        <Col>
          <div>
            <h1>Transaction</h1> {user?.username}
            <button
              className="btn btn-primary"
              onClick={() => {
                setForm({
                  type: "income",
                  description: "",
                  amount: 0,
                  date: "",
                });

                handleShow();
              }}
            >
              Add
            </button>
            <hr />
            <Table hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Out</th>
                  <th>In</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{t.date.split("T")[0]}</td>
                      <td>{t.description}</td>
                      <td className="text-danger">
                        {t.type == "expense" ? "$" + t.amount : ""}
                      </td>
                      <td className="text-success">
                        {t.type == "income" ? "$" + t.amount : ""}
                      </td>
                      <td>
                        <button
                          className="btn btn-danger me-2"
                          onClick={() => {
                            handleOnDelete(t._id);
                          }}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            setForm(t);
                            handleShow();
                          }}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total : {total}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{form?._id ? "Update" : "Add"} Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TransactionForm
            form={form}
            setForm={setForm}
            handleOnChange={handleOnChange}
            fetchTransaction={fetchTransaction}
            handleClose={handleClose}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Transaction;
