//
//  RNTSCPrinter.m
//  RNTSCPrinter
//
//  Created by Ilya Trikoz on 06.06.20.
//  Copyright © 2020 Ilya Trikoz. All rights reserved.
//

#import "RNTSCPrinter.h"

@implementation RNTSCPrinter

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
    
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(openport:(NSDictionary*) params resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}
RCT_EXPORT_METHOD(closeport:(NSNumber*) delay resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}
RCT_EXPORT_METHOD(sendcommand:(NSString*) command resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}
RCT_EXPORT_METHOD(clearbuffer:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}
RCT_EXPORT_METHOD(printlabel:(NSDictionary*) params resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}
RCT_EXPORT_METHOD(downloadbmp:(NSString*) command resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}
RCT_EXPORT_METHOD(downloadttf:(NSString*) command resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}
RCT_EXPORT_METHOD(downloadpcx:(NSString*) command resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}
RCT_EXPORT_METHOD(sendfile:(NSString*) command resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}
RCT_EXPORT_METHOD(formfeed:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}
RCT_EXPORT_METHOD(nobackfeed:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}
RCT_EXPORT_METHOD(printerstatus:(NSNumber*) timeout resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}
RCT_EXPORT_METHOD(printerfont:(NSDictionary*) params resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}
RCT_EXPORT_METHOD(barcode:(NSDictionary*) params resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve(@FALSE);
}

@end