import React from "react";
import { useState } from "react";

function AddCandidate() {
  return (
    <div>
      <form method="POST">
        <lable class="lable"> name </lable>
        <input
          class="textName"
          type="text"
          id="name"
          placeholder="Enter your name"
        ></input>
        <lable class="lable"> image </lable>
        <input
          class="image"
          type="file"
          accept="image/*"
          value={image}
          id="image"
        ></input>
        <lable class="lable"> DOB </lable>
        <input
          type="date"
          class="date"
          id="date"
          placeholder="select your Dob"
          value={dob}
        ></input>
              <lable class="lable"> gender </lable>
              <select value={gender} class="gender 
        <lable class="lable"> location </lable>
        <lable class="lable"> address </lable>
        <lable class="lable"> email id </lable>
        <lable class="lable"> phone </lable>
      </form>
    </div>
  );
}
