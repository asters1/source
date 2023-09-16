#!/bin/bash

pidTTS=$(pidof tts)
kill -9 ${pidTTS}
