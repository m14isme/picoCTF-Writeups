# Easy1

Point: 100

## Category

Cryptography

## Question

The one time pad can be cryptographically secure, but not when you know the key. Can you solve this? We've given you the encrypted flag, key, and a table to help `UFJKXQZQUNB` with the key of `SOLVECRYPTO`. Can you use this [table](https://2019shell1.picoctf.com/static/30d4405c34cf6490b082e6cf8f56ac56/table.txt) to solve it?.

## Hint

* Submit your answer in our competition's flag format. For example, if you answer was 'hello', you would submit 'picoCTF{HELLO}' as the flag.
* Please use all caps for the message.


## Solution

This is a classic [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher). We can use [CyberChef](https://gchq.github.io/CyberChef/) tool to solve this challenge.

## Flag

picoCTF{CRYPTOISFUN}