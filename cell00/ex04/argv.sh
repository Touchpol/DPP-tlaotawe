# && = if slse

if [ $# -eq 0 ]
then
    echo "No arguments supplied"
else
    echo "$1"
    [ -n "$2" ] && echo "$2"
    [ -n "$3" ] && echo "$3"
    [ -n "$4" ] && echo "$4"
fi

# write in terminal
# ./argv.sh
# ./argv.sh 42
# ./argv.sh 2 40 42
# ./argv.sh Hello World ! 42
# chmod +x build.sh
