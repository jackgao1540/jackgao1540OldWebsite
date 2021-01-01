import React from 'react';
import * as tf from '@tensorflow/tfjs';

require('@tensorflow/tfjs-node');

lstm_tsla_model = await tf.loadLayersModel('http://127.0.0.1:5500/NN Models/LSTM_model.json');
