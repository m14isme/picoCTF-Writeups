# The numbers

Point: 50

## Category

Cryptography

## Question

The [numbers](https://2019shell1.picoctf.com/static/eb3589c566dd3f809908053460acb817/the_numbers.png) [(link)](https://2019shell1.picoctf.com/static/eb3589c566dd3f809908053460acb817/the_numbers.png)... what do they mean?

## Hint

The flag is in the format PICOCTF{}

## Solution

We have a picture from the link, and the picture will show some numbers. 

Go to hint we see `PICOCTF{}`, it means all of the words will be UPPERCASE.

Then we'll write some code to decode it.

```bash
def main():
    al = []
    for i in range(26):
        al.append(chr(ord("A") + i))

    enc_flag_pre = [16, 9, 3, 15, 3, 20, 6]
    enc_flag_body = [20, 8, 5, 14, 21, 13, 2, 5, 18, 19, 13, 1, 19, 15, 14] 

    flag = ""
    for i in enc_flag_pre:
        flag+= al[i - 1]
    
    flag += "{"
    for i in enc_flag_body:
        flag += al[i - 1]

    flag+= "}"
    print(flag)

if __name__ == "__main__":
    main()
```
Result...

```bash
m14@m14ghost:~/Programming$ python solve.py 
PICOCTF{THENUMBERSMASON}
```

## Flag

PICOCTF{THENUMBERSMASON}