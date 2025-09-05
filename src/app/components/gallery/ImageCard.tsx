'use client';

import React, { useState } from 'react';
import { Download, Heart, Eye, User } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ImageCardProps {
  id: string;
  title: string;
  author: string;
  downloads: number;
  likes?: number;
  tags: string[];
  aiModel: string;
  imageUrl?: string;
  className?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  author,
  downloads,
  likes = 0,
  tags,
  aiModel,
  imageUrl,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={className}>
      <Card hover={true}>
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 이미지 영역 */}
          <div
            className="aspect-[4/3] relative"
            style={{ backgroundColor: 'var(--color-gray-200)' }}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Eye 
                    size={48} 
                    style={{ 
                      color: 'var(--color-gray-400)',
                      margin: '0 auto 8px'
                    }} 
                  />
                  <p
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-gray-500)',
                    }}
                  >
                    이미지 미리보기
                  </p>
                </div>
              </div>
            )}

            {/* 호버 오버레이 */}
            {isHovered && (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--color-overlay-70)',
                  transition: 'var(--transition-opacity)',
                }}
              >
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    style={{
                      backgroundColor: 'var(--color-white)',
                      color: 'var(--color-gray-950)',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLiked(!isLiked);
                    }}
                  >
                    <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    style={{
                      backgroundColor: 'var(--color-white)',
                      color: 'var(--color-gray-950)',
                    }}
                  >
                    <Download size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    style={{
                      backgroundColor: 'var(--color-white)',
                      color: 'var(--color-gray-950)',
                    }}
                  >
                    <Eye size={16} />
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* 콘텐츠 영역 */}
          <div className="p-4">
            {/* 제목 */}
            <h3
              className="font-semibold mb-2 truncate"
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-gray-950)',
              }}
            >
              {title}
            </h3>

            {/* 작성자 */}
            <div className="flex items-center mb-3">
              <User 
                size={14} 
                style={{ 
                  color: 'var(--color-gray-400)',
                  marginRight: '4px'
                }} 
              />
              <span
                style={{
                  fontFamily: 'var(--font-family)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-gray-500)',
                }}
              >
                {author}
              </span>
            </div>

            {/* 태그 */}
            <div className="flex flex-wrap gap-1 mb-3">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="category">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="category">
                  +{tags.length - 3}
                </Badge>
              )}
            </div>

            {/* 하단 정보 */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily: 'var(--font-family)',
                    color: 'var(--color-gray-500)',
                  }}
                >
                  <Download size={12} className="inline mr-1" />
                  {downloads.toLocaleString()}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-family)',
                    color: 'var(--color-gray-500)',
                  }}
                >
                  <Heart size={12} className="inline mr-1" />
                  {likes}
                </span>
              </div>
              <Badge variant="default">
                {aiModel}
              </Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};