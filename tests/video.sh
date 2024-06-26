#!/bin/bash

set -e

dfx identity new principal2 --storage-mode=plaintext || true
dfx identity new principal3 --storage-mode=plaintext || true
dfx identity new principal4 --storage-mode=plaintext || true
dfx identity new principal5 --storage-mode=plaintext || true

# TESTING1=$(dfx --identity default identity get-principal)
TESTING2=$(dfx --identity principal2 identity get-principal)
TESTING3=$(dfx --identity principal3 identity get-principal)
TESTING4=$(dfx --identity principal4 identity get-principal)
TESTING5=$(dfx --identity principal5 identity get-principal)

# echo "TESTING1: $TESTING1"
echo "TESTING2: $TESTING2"
echo "TESTING3: $TESTING3"
echo "TESTING4: $TESTING4"
echo "TESTING5: $TESTING5"

CANISTER=$(dfx canister id backend_content_canister)
echo "Canister ID: $CANISTER"

IDENTITIES=("principal2" "principal3" "principal4" "principal5")

declare -A video_data

# COURSE_ID='1711090272691525196'


# video_data[principal3]='record {
#     videoTitle="Foundation and First Deployment";
#     videobucket="sample";
#     videofile="sample";
#     videodescription="Overview of the ICP ecosystem. Tools and prerequisites for ICP development.
#     Step-by-step guide to setting up the development environment.";
#     videoduration=0;
#     viewcount=0;
#     viewUserId=null;
# }'

# video_data[principal3]='record{
#     videoTitle="Setting Up Environment (Practical)";
#     videobucket="sample";
#     videofile="sample";
#     videodescription="Practical application of Episode 1s theory. First-hand experience in configuring the necessary development tools and environment.";
#     videoduration=0;
#     viewcount=0;
#     viewUserId=null;
# }'


dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record {
    videoTitle="Foundation and First Deployment";
    videobucket="sample";
    videofile="sample";
    videodescription="Overview of the ICP ecosystem. Tools and prerequisites for ICP development.
    Step-by-step guide to setting up the development environment.";
    videoduration=0;
    viewcount=0;
    viewUserId=null})'


dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record{
    videoTitle="Setting Up Environment (Practical)";
    videobucket="sample";
    videofile="sample";
    videodescription="Practical application of Episode 1s theory. First-hand experience in configuring the necessary development tools and environment.";
    videoduration=0;
    viewcount=0;
    viewUserId=null;
})'


dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record{
    videoTitle="Understanding Basic";
    videobucket="sample";
    videofile="sample";
    videodescription="Introduction to ICP Azles core concepts.Importance of Azle in developing DApps on ICP.";
    videoduration=0;
    viewcount=0;
    viewUserId=null;
})'

dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record{
    videoTitle="Deploying Your First Canister";
    videobucket="sample";
    videofile="sample";
    videodescription="Comprehensive guide to canister development.Steps to deploy your first canister on the ICP network.";
    videoduration=0;
    viewcount=0;
    viewUserId=null;
})'

dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record{
    videoTitle="Deploying Your First Canister (Practical)";
    videobucket="sample";
    videofile="sample";
    videodescription="Hands-on deployment of a canister.Troubleshooting common issues and ensuring successful deployment.";
    videoduration=0;
    viewcount=0;
    viewUserId=null;
})'


dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record{
    videoTitle="Interactivity and Advanced Development";
    videobucket="sample";
    videofile="sample";
    videodescription="Techniques for effective canister interaction.
    Understanding canister functions and commands.";
    videoduration=0;
    viewcount=0;
    viewUserId=null;
})'

dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record{
    videoTitle="Building Sample Projects";
    videobucket="sample";
    videofile="sample";
    videodescription="Exploring and deploying sample projects from the ICP library.
    Insight into practical application and project deployment on ICP.";
    videoduration=0;
    viewcount=0;
    viewUserId=null;
})'

dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record{
    videoTitle="Canister Recap and Key Takeaways";
    videobucket="sample";
    videofile="sample";
    videodescription="Consolidation of learned concepts about canisters.
    Highlighting essential takeaways for real-world application.";
    videoduration=0;
    viewcount=0;
    viewUserId=null;
})'

dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record{
    videoTitle="Mastering the Update Method";
    videobucket="sample";
    videofile="sample";
    videodescription="Consolidation of learned concepts about canisters.
    Highlighting essential takeaways for real-world application.";
    videoduration=0;
    viewcount=0;
    viewUserId=null;
})'

dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record{
    videoTitle="Mastering Candid Interfaces";
    videobucket="sample";
    videofile="sample";
    videodescription="Introduction to Candid and its role in canister development.Practical use cases and implementation of Candid interfaces.";
    videoduration=0;
    viewcount=0;
    viewUserId=null;
})'

dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record{
    videoTitle=" Navigating Stable Structures";
    videobucket="sample";
    videofile="sample";
    videodescription="Understanding Stable Structures and their importance in IC development.Techniques for utilizing Stable Structures in DApps.";
    videoduration=0;
    viewcount=0;
    viewUserId=null;
})'


dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record{
    videoTitle="Exploring Advanced Azle Capabilities";
    videobucket="sample";
    videofile="sample";
    videodescription="Coverage of advanced Azle features including cross-canister communication, HTTP endpoints, and more.Understanding the comprehensive range of APIs available to Azle canisters.";
    videoduration=0;
    viewcount=0;
    viewUserId=null;
})'


dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record{
    videoTitle="Exploring Advanced Azle Capabilities (Practical)";
    videobucket="sample";
    videofile="sample";
    videodescription="Hands-on exploration of advanced Azle features.Practical application of learned advanced concepts in project development.";
    videoduration=0;
    viewcount=0;
    viewUserId=null;
})'


dfx canister call backend_content_canister addvideodetail '("1711090272691525196",record{
    videoTitle="Mastering the Update Method";
    videobucket="sample";
    videofile="sample";
    videodescription="Consolidation of learned concepts about canisters.
    Highlighting essential takeaways for real-world application.";
    videoduration=0;
    viewcount=0;
    viewUserId=null;
})'



# for IDENTITY in "${!video_data[@]}"
# do
#   dfx identity use "$IDENTITY"
#   CURRENT_PRINCIPAL=$(dfx identity get-principal)
#   echo "Using identity $IDENTITY with principal $CURRENT_PRINCIPAL"

#   # Extract and use the user data for the current identity
#   VIDEO_DATA=${video_data[$IDENTITY]}
#   echo "Registering with data: $VIDEO_DATA"
#   COURSE_ID='1711090272691525196'

#   # Call the register_user function with the current identity and its unique data
#   dfx canister call $CANISTER addvideodetail "($COURSE_ID,$VIDEO_DATA)"
# done


