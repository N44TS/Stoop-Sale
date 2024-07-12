import React from 'react';

const AudioPlayer = ({ waveCount, messageValue, func, wave, allWaves }) => {
    return (
        <div className='mediaplayer'>
            <div className='winamp'>
                <div className='header'>&nbsp;</div>
                <div className='player'>
                    <div className='vis'> 00:00[{waveCount}]</div>
                    <div className='vis title'><marquee>lovely lemons playlist...Total songs [{waveCount}]</marquee></div>
                    <div className='inf'></div>
                    <div className='inf khz'></div>
                    <div className='mono_stereo'>mono</div>
                    <div className='bar volume'></div>
                    <div className='bar blanced'></div>
                    <div className="btn ext left">EQ</div>
                    <div className="btn ext">PL</div>
                    <div className='sidebar'></div>
                    <div className='submit'>
                        <input className="add-music-input"
                            placeholder="Paste Spotify URL to add to playlist!"
                            name="url"
                            type="url"
                            id="urlInput"
                            value={messageValue}
                            onChange={func}
                        />
                        <button className='pbutton' onClick={wave}>Submit</button>
                        <button className='pbutton'>►</button><button className='pbutton'>||</button><button className='pbutton'>&#9632;</button>
                    </div>
                </div>
                <div className='header spotify'>&nbsp;</div>
                <div className='player spotify'>
                    <div>
                        {allWaves.map((wave, index) => {
                            return (
                                <div key={index}>
                                    <div><iframe src={wave.message} loading="lazy" className="iframe" width="300" height="80" allowtransparency="true" allow="encrypted-media"></iframe></div>
                                </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;
