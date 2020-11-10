# Unzip

Point: 50 

## Category

Forensics

## Question

Can you unzip this [file](https://2019shell1.picoctf.com/static/37762a7e5774d7d6c1bc79e8e1758ef9/flag.zip) and get the flag?

## Hint

No hint

## Solution

```bash
# check for version of zip file
file flag.zip

# The Strings command basically prints the strings of printable characters in files
strings -e l flag.zip | grep pico

# Then just unzip flag.zip. Finally we've got a flag.png image. This will show you the flag
unzip flag.zip

```

## Flag

picoCTF{unz1pp1ng_1s_3s5y}