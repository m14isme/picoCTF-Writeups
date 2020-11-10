# First Grep

Point: 100

## Category

General Skill

## Question

Can you find the flag in [file](https://2019shell1.picoctf.com/static/458ae91cb23746189bf490f0c8d9a919/file)? This would be really tedious to look through manually, something tells me there is a better way. You can also find the file in /problems/first-grep_2_04dbf496b78e6c37c0097cdfef734d88 on the shell server.

## Hint

grep [tutorial](https://ryanstutorials.net/linuxtutorial/grep.php)

## Solution

Know about this to solve this challenge: [Grep](https://ryanstutorials.net/linuxtutorial/grep.php). </br>
Try to find the flag in file with `m14@pico-2019-shell1:/problems/first-grep_2_04dbf496b78e6c37c0097cdfef734d88$ egrep 'pico' file`. We got the flag.

## Flag

picoCTF{grep_is_good_to_find_things_bf6aec61}