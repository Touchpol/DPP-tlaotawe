# write in terminal
# chmod +x count_files.sh to run file
# ./count_files.sh | cat -e

find . -maxdepth 1 ! -name '.' | wc -l