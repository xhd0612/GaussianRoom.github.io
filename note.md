# ref
https://nerfies.github.io/

# split mp4
ffmpeg -i input.mp4 -ss start_time -t duration -c copy output.mp4

ffmpeg -i ./static/videos/GaussianRoom_720p.mp4 -ss 00:00:00 -t 00:00:46 -c copy ./static/videos/ReconstructionResults_720p.mp4 
ffmpeg -i ./static/videos/GaussianRoom_720p.mp4 -ss 00:00:47 -t 00:02:10 -c copy ./static/videos/ReconstructionComparisons_720p.mp4 
ffmpeg -i ./static/videos/GaussianRoom_720p.mp4 -ss 00:02:10 -t 00:03:31 -c copy ./static/videos/RenderingComparisons_720p.mp4 

ffmpeg -i ./static/videos/ReconstructionComparisons_720p.mp4  -c:v libx264 -preset veryslow -crf 0 -c:a copy ./static/videos/ReconstructionComparisons_720p111.mp4

ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -c:a copy output.mp4

ffmpeg -i ./static/videos/ReconstructionComparisons_720p.mp4 -c:v libx264 -preset slow -crf 23 -c:a copy ./static/videos/ReconstructionComparisons_720p1.mp4