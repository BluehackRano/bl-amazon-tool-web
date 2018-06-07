#!/usr/bin/env bash

#yarn build
npm run build

TOP="/Users/daesubkim/Desktop/Amazon/bl-amazon-tool-web"
s3cmd sync --exclude-from .s3ignore $TOP/ --default-mime-type="text/html" --guess-mime-type $TOP/* s3://bl-amazon-tool -c ~/.s3cfg
