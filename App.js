import React from 'react';
import * as tf from '@tensorflow/tfjs';


lstm_tsla_model = await tf.loadLayersModel('https://github.com/jackgao1540/Website/blob/main/models/LSTM_model.json');