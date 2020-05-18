import ReactDOMServer from 'https://dev.jspm.io/react-dom/server'
import React from 'https://dev.jspm.io/react'
import Head from '../components/Head.jsx'

export default function usePage(page) {
  return ctx => {
    ctx.response.body = '<!DOCTYPE html><html>'
    + ReactDOMServer.renderToString(React.createElement(Head))
    + ReactDOMServer.renderToString(React.createElement(page))
    + '</html>'
  }
}