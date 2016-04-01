# coding: utf-8
from fabric.api import run, env, cd, settings

def deploy():
    env.host_string = "user@ip"
    with cd('/path/to/your/project'):
        run('git reset --hard HEAD')
        run('git pull')
        run('npm install')
        with settings(warn_only=True):
            run('npm run clean')
        run('npm run build')
        run('npm run upload')
