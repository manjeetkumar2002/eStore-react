import React from "react";

const TestinomialCard = ({ index,data }) => {
  return (
    <div className="position-relative card rounded-4 border border-1  mb-3 p-4" style={{backgroundColor:index%2==1?"#ebf2fa":"",border:index%2==1?"1px solid #0a4db8":""}}>
        <i className="bi bi-quote position-absolute px-2 py-1 rounded-circle border-1 border" style={{color:"#0a4db8",top:"-5%",left:"6%",backgroundColor:index%2==1?"#ebf2fa":"white"}}></i>
      <p className="fs-6 lh-3 my-4 fw-semibold">{data.testinomial}</p>
      <hr />
      <div className="d-flex gap-4 align-items-center">
        <div>
          <img height={50} width={50} className="rounded-circle" src={data.authorImage} alt="" />
        </div>
        <div>
          <h4 className="fs-5">{data.author}</h4>
          <p className="fs-6">{data.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestinomialCard;
