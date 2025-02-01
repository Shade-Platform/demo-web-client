import axios from 'axios';
import React, { FormEvent, useState } from 'react'

function Success(params) {

  const date = new Date(Date.parse(params.CreationDate));

  return (
    <div className="max-w-lg mx-auto p-16 bg-gray-900 rounded-3xl text-blue-500">
      <div className="mb-5">
        Container has been created!
      </div>
      <div className="mb-5">
        <div className='block mb-2 text-sm text-yellow-500 font-medium text-left'>
          Creation Date: <span className='text-red-500'>{date.toDateString()}</span>
        </div>
        <div className='block mb-2 text-sm text-yellow-500 font-medium text-left'>
          Namespace: <span className='text-red-500'>{params.username}</span>
        </div>
        <div className='block mb-2 text-sm text-yellow-500 font-medium text-left'>
          Container Tag: <span className='text-red-500'>{params.containerTag}</span>
        </div>
        <div className='block mb-2 text-sm text-yellow-500 font-medium text-left'>
          Mapped Port: <span className='text-red-500'>{params.mappedPort}</span>
        </div>
        <div className='block mb-2 text-sm text-yellow-500 font-medium text-left'>
          External Port: <span className='text-red-500'>{params.openedPorts}</span>
        </div>
      </div>
    </div>
  )
}

export default Success
