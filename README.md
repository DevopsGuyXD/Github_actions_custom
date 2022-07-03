# Github_actions_custom

Login to AWS


Usage:

on:
  push:
    branches: [ main ]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to login to AWS

    steps:

    - name: Checkout
      uses: actions/checkout@master
      with:
        repository: DevopsGuyXD/Github_actions_custom
        ref: refs/heads/aws_login

    - name: AWS login
      id: aws_login
      uses: ./
      env:
        ACCESS_KEY_ID: ${{ secrets.ACCESS_KEY_ID }}
        ACCESS_KEY_SECRET: ${{ secrets.ACCESS_KEY_SECRET }}
        REGION: ${{ secrets.REGION }}
      with:
        access_key_id: 'AKIAYUOXBHDKRROR2TRK'
        access_key_secret: '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'
        region: 'ap-south-1'