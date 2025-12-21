#  import subprocess

#  def run_command(user_input):
# #    # This is a Command Injection vulnerability!
# #    # Semgrep p/default will catch "shell=True" with variable input
#     subprocess.call(user_input, shell=True)