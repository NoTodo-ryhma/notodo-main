#!/bin/bash
export PORT='2225'
export ROOT_URL="http://www.bittitehdas.fi:$PORT"
export MAIL_URL='smtp://smtp.dna044.com:587'
meteor --port $PORT
