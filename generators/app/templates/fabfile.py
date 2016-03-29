# coding: utf-8
from fabric.api import run, env, cd

def deploy():
    env.host_string = "root@yourip"
    with cd('/path/to/your/project'):
        run('git reset --hard HEAD')
        run('git pull')
        run('npm install')
        run('npm run clean')
        run('npm run build')
        run('npm run upload')
