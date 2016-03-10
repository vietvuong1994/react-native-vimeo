//
//  RCTVimeoManager.m
//  RCTVimeoManager
//
//  Created by Alex McLeod on 9/03/2016.
//
//

#import "RCTVimeoManager.h"
#import "RCTViewManager.h"
#import <MapKit/MapKit.h>

@interface RCTVimeoManager()

@end

@implementation RCTVimeoManager
    
RCT_EXPORT_MODULE();
    
- (UIView *)view
{
    return [[MKMapView alloc] init];
}

@end


