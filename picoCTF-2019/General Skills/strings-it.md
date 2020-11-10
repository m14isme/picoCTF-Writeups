# strings it

Point: 100

## Category

General Skills

## Question

Can you find the flag in [file](https://2019shell1.picoctf.com/static/e93edd77d319a5a634cd4d20159cbc1d/strings) without running it? You can also find the file in /problems/strings-it_3_8386a6aa560aecfba03c0c6a550b5c51 on the shell server.

## Hint 

[strings](https://linux.die.net/man/1/strings)

## Solution

```base
m14@pico-2019-shell1:/problems/strings-it_3_8386a6aa560aecfba03c0c6a550b5c51$ strings strings | grep picoCTF
```

## Flag

picoCTF{5tRIng5_1T_c7fff9e5}