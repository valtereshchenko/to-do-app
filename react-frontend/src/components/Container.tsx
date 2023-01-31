import React from 'react'
import '../App.css';

type ContainerProps = {
    styles: React.CSSProperties,
    children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
  return (
    <div className='App-header'>
        <h2 className='App'>Welcome to my Super To-Do List</h2>
        <div style = {props.styles}>{props.children}</div>
    </div>
  )
}
