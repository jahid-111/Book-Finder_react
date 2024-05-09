/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdStarHalf } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";

const Books = ({ books, addCartBtn, isFav }) => {
  const [clickCart, addedCart] = addCartBtn;
  return (
    <div>
      <div className="container mx-auto grid  grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="space-y-3 bg-gray-100 rounded-md border p-2 "
          >
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 p-4">
              <img className="w-full" src={book.image} alt="book name" />
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-bold lg:text-xl">{book.name}</h4>
              <div className="text-xs font-semibold lg:text-sm flex justify-between">
                <p>
                  {" "}
                  By : <span>{book.By}</span>
                </p>
                <p>
                  {" "}
                  Year : <span>{book.year}</span>
                </p>
              </div>

              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold lg:text-xl">$ {book.price}</h4>
                <div className="flex items-center space-x-1">
                  <MdOutlineStar className=" text-orange-500"></MdOutlineStar>
                  <MdOutlineStar className=" text-orange-500"></MdOutlineStar>
                  <MdOutlineStar className=" text-orange-500"></MdOutlineStar>
                  <MdOutlineStar className=" text-orange-500"></MdOutlineStar>
                  <IoMdStarHalf className=" text-orange-400"></IoMdStarHalf>

                  <span className="text-xs lg:text-sm">{book.ratting}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 text-xs lg:text-sm">
                <button
                  onClick={() => {
                    clickCart(book.id);
                  }}
                  className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  {addedCart && addedCart.includes(book.id)
                    ? "Cart Added"
                    : "Add Cart"}
                </button>

                <button onClick={() => isFav(book.id)}>
                  {book.isFav ? (
                    <FaHeart className=" text-xl text-red-700 "></FaHeart>
                  ) : (
                    <FaHeart className=" text-xl text-gray-500 "></FaHeart>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
