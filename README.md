# Github_actions_custom

<h3>Login to AWS</h3>

<h4>Secrets: </h4>

    ACCESS_KEY_ID | ACCESS_KEY_SECRET | REGION


<h4>Action: </h4>

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
        access_key_id: $ACCESS_KEY_ID
        access_key_secret: $ACCESS_KEY_SECRET
        region: $REGION
