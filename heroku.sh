GREEN='\033[0;32m'
ORANGE='\033[0;33m'
END='\033[0m'
if [ $1 ] && [ $1 == 'new' ]
then
    heroku create
    git remote -v
elif [ $1 ] && [ $1 == 'link' ]
then
    heroku git:remote -a agile-gorge-15199
else
    echo -e "${ORANGE}please add a command:${END} ${GREEN}\"new\"${END} or ${GREEN}\"link\"${END}"
fi