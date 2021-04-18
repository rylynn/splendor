# coding=UTF-8
import os
import gevent.monkey
gevent.monkey.patch_all()
import multiprocessing

loglevel = 'debug'
bind = "0.0.0.0:8080"
pidfile = "../log/splendor.pid"
accesslog = "../log/splendor_info.log"
errorlog = "../log/splendor_debug.log"
daemon = True

# 启动的进程数
workers = 1
worker_class = 'gevent'
x_forwarded_for_header = 'X-FORWARDED-FOR'
