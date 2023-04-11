#!/bin/bash

cd /opt/yacd/configs
rm -R latest
mkdir latest
for I in *; do 
if [ -d $I ]
then
if [ -e /opt/yacd/configs/$I/latest.config ]
then
ln -fs /opt/yacd/configs/$I/latest.config latest/$I.config; 
fi
fi
done

/opt/yacd/bin/spans.sh > /opt/yacd/site/spans.html
