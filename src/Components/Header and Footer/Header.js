import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef } from 'react';
import{AiOutlineLogin} from 'react-icons/ai'
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';

import Toast_Function from "../Toast/Toast_Function";
const Head = () => {

  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <body>
      <>

        <div className="C2">

          <Card style={{ backgroundColor: "white", textAlign: "center", borderBlock: "dotted", borderWidth: 10, marginBottom: 10 }}>

            <Card.Body>
              <blockquote className="blockquote mb-0">

                <Button variant="danger" ref={target} onClick={() => setShow(!show)} style={{ marginRight: "90%", height: "100%" }}>
                 Login <AiOutlineLogin/>

                </Button>
                <Overlay target={target.current} show={show} placement="right">
                  {({
                    placement: _placement,
                    arrowProps: _arrowProps,
                    show: _show,
                    popper: _popper,
                    hasDoneInitialMeasure: _hasDoneInitialMeasure,
                    ...props
                  }) => (
                    <div
                      {...props}
                      style={{
                        position: 'absolute',
                        backgroundColor: 'rgba(255, 100, 100, 0.85)',
                        padding: '2px 10px',
                        color: 'white',
                        borderRadius: 3,
                        // height :,
                        ...props.style,
                      }}
                    >
                      <Toast_Function />
                    </div>

                  )}
                </Overlay>



              </blockquote>
            </Card.Body>
          </Card>
        </div>
      </>
    </body>
  );

}; export default Head;