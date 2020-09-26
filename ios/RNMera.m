//
//  RNMera.m
//  RNMera
//
//  Created by Ilya Trikoz on 06.06.20.
//  Copyright © 2020 Ilya Trikoz. All rights reserved.
//

#import "RNMera.h"

@implementation RNMera

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
    
}

RCT_EXPORT_MODULE()

// RCT_EXPORT_METHOD(openport:(NSDictionary*) params resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
//     resolve(@FALSE);
// }
RCT_EXPORT_METHOD(connect:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}

@end