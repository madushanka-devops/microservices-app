# This is a test file to trigger a CI security failure
def connect_to_aws():
    # HARDCODED SECRET - This should trigger Semgrep/Trivy!
    aws_access_key_id = "AKIA1234567890EXAMPLE"
    aws_secret_access_key = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
    print("Connecting to AWS...")

connect_to_aws()