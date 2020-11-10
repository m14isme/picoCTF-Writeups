# Bases

Point: 100

## Category

General Skills

## Question

What does this bDNhcm5fdGgzX3IwcDM1 mean? I think it has something to do with bases.

## Hint 

Submit your answer in our competition's flag format. For example, if you answer was 'hello', you would submit 'picoCTF{hello}' as the flag.

## Solution

Decode `bDNhcm5fdGgzX3IwcDM1` with python code. Then we've got the flag

```base
import base64

data = "bDNhcm5fdGgzX3IwcDM1"
decoded = base64.b64decode(data)

print(decoded)
```

## Flag

picoCTF(l3arn_th3_r0p35)