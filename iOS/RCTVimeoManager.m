//
//  RCTVimeoManager.m
//  RCTVimeoManager
//
//  Created by Alex McLeod on 9/03/2016.
//
//

#import "RCTVimeoManager.h"
#import "RCTViewManager.h"
#import "VIMVideoPlayerView.h"

@interface RCTVimeoManager()

@end

@implementation RCTVimeoManager
    
RCT_EXPORT_MODULE();
    
- (UIView *)view
{
    VIMVideoPlayerView *view = [[VIMVideoPlayerView alloc] init];
    [view.player setURL:@"https://vimeo.com/channels/pointofview/151075796"];
    return view;
}

@end


